#!/bin/bash

# Exit on any error
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Print step description with color
print_step() {
    echo -e "\n${GREEN}$1${NC}"
}

# Check if origin remote exists, add if missing
print_step "1. Verifying Git remote..."
if ! git remote | grep -q '^origin$'; then
    echo -e "${YELLOW}No 'origin' remote found. Adding placeholder...${NC}"
    git remote add origin https://github.com/hidlmiddle/coolwebsite.git
fi

# Get branch name from user or use default
print_step "2. Setting up branch..."
read -p "Enter branch name (press Enter for 'feature/cursor-updates'): " branch_name
branch_name=${branch_name:-feature/cursor-updates}

# Create and switch to branch, or switch if it exists
if git show-ref --quiet refs/heads/$branch_name; then
    git switch $branch_name
else
    git switch -c $branch_name
fi

# Stage all changes
print_step "3. Staging changes..."
git add .

# Commit changes
print_step "4. Committing changes..."
git commit -m "feat: integrate Cursor scaffolded updates"

# Pull latest main with rebase
print_step "5. Pulling latest main..."
echo -e "${YELLOW}Attempting to rebase on main...${NC}"
git fetch origin main
if ! git rebase origin/main; then
    echo -e "${YELLOW}Conflicts detected. Please resolve them and run 'git rebase --continue'${NC}"
    echo "After resolving conflicts, run: git push -u origin $branch_name"
    exit 1
fi

# Push to remote and set upstream
print_step "6. Pushing to remote..."
git push -u origin $branch_name

# Show next steps
print_step "✨ All done! Next steps:"
echo -e "Open a pull request on GitHub: ${GREEN}https://github.com/your-user/your-repo/pull/new/$branch_name${NC}"
