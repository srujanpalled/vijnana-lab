import subprocess
import os
import time
from datetime import datetime
import sys

def run_command(command):
    """
    Runs a shell command and returns the output or None if it fails.
    """
    try:
        # result = subprocess.run(command, check=True, capture_output=True, text=True, shell=True)
        # Using a list with shell=False is generally safer but some Windows environments prefer shell=True
        # For simplicity and responsiveness, we'll use shell=True for this script
        result = subprocess.run(command, check=True, capture_output=True, text=True, shell=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {' '.join(command)}")
        print(f"Output: {e.output}")
        print(f"Error: {e.stderr}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

def autopush():
    print("-" * 50)
    print(f"Starting Autopush at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("-" * 50)

    # 1. Ensure we are in a Git repository
    if not os.path.isdir(".git"):
        print("Error: No .git directory found. Please run this script from the root of your project.")
        return

    # 2. Check for changes
    print("Checking for changes...")
    status = run_command(["git", "status", "--short"])
    if not status:
        print("No changes to push. All caught up!")
        return

    print("Changes detected:")
    print(status)

    # 3. Add all changes
    print("\nStaging changes...")
    run_command(["git", "add", "."])

    # 4. Commit changes
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    commit_msg = f"Auto-push: {timestamp}"
    print(f"Committing with message: '{commit_msg}'")
    run_command(["git", "commit", "-m", f'"{commit_msg}"'])

    # 5. Push to remote
    print("\nPushing to remote repository...")
    # Get current branch
    branch = run_command(["git", "branch", "--show-current"])
    if not branch:
        branch = "main" # Fallback
    
    push_result = run_command(["git", "push", "origin", branch])
    
    if push_result is not None:
        print("\n" + "=" * 50)
        print("SUCCESS: Changes pushed successfully!")
        print("=" * 50)
    else:
        print("\n" + "!" * 50)
        print("FAILED: Could not push changes. Check your remote settings.")
        print("!" * 50)

if __name__ == "__main__":
    # If the user wants to run this in a loop, they can pass 'loop' as an argument
    if len(sys.argv) > 1 and sys.argv[1].lower() == "loop":
        interval = 300 # 5 minutes default
        if len(sys.argv) > 2:
            try:
                interval = int(sys.argv[2])
            except ValueError:
                pass
        
        print(f"Running in loop mode every {interval} seconds. Press Ctrl+C to stop.")
        try:
            while True:
                autopush()
                time.sleep(interval)
        except KeyboardInterrupt:
            print("\nAutopush stopped by user.")
    else:
        autopush()
