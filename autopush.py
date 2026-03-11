import subprocess
import os
import time
from datetime import datetime
import sys

LOG_FILE = "autopush.log"

def run_command(command):
    try:
        result = subprocess.run(command, capture_output=True, text=True, shell=True)
        if result.returncode != 0:
            print("Error:", result.stderr)
            return None
        return result.stdout.strip()
    except Exception as e:
        print("Exception:", e)
        return None


def log(message):
    with open(LOG_FILE, "a") as f:
        f.write(message + "\n")


def autopush():
    print("\n" + "=" * 60)
    print("🚀 AUTOPUSH RUNNING")
    print("Time:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    print("=" * 60)

    if not os.path.isdir(".git"):
        print("❌ Not a git repository")
        return

    # Check changes
    status = run_command("git status --short")

    if not status:
        print("✅ No changes detected")
        return

    print("📂 Changes detected:")
    print(status)

    # Stage files
    print("\n📌 Adding files...")
    run_command("git add .")

    # Commit
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    commit_message = f"Auto Commit : {timestamp}"

    print("💾 Committing...")
    run_command(f'git commit -m "{commit_message}"')

    # Get branch
    branch = run_command("git branch --show-current")

    if not branch:
        branch = "main"

    print("🌿 Branch:", branch)

    # Pull before push
    print("⬇ Pulling latest changes...")
    run_command(f"git pull origin {branch} --rebase")

    # Push
    print("⬆ Pushing to GitHub...")
    result = run_command(f"git push origin {branch}")

    if result is not None:
        print("✅ Push successful!")

        log(f"{timestamp} → pushed successfully")

    else:
        print("❌ Push failed")
        log(f"{timestamp} → push failed")


def loop_mode(interval):

    print(f"\n🔁 Running every {interval} seconds")
    print("Press CTRL+C to stop\n")

    try:
        while True:
            autopush()
            time.sleep(interval)

    except KeyboardInterrupt:
        print("\n🛑 Autopush stopped")


if __name__ == "__main__":

    if len(sys.argv) > 1 and sys.argv[1] == "loop":

        interval = 300

        if len(sys.argv) > 2:
            try:
                interval = int(sys.argv[2])
            except:
                pass

        loop_mode(interval)

    else:
        autopush()