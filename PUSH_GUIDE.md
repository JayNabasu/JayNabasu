# Step-by-Step Guide to Publishing Your Portfolio to GitHub

All 4 projects have been built, verified, and committed locally under your name and personal email (`Jerry Nabasu <jerrynabasu@gmail.com>`).

Follow these simple steps to publish them to your GitHub profile ([https://github.com/JayNabasu](https://github.com/JayNabasu)):

---

## Step 1: Create the 4 Repositories on GitHub
Log in to your GitHub account and create four **empty public repositories** (do not initialize with README, .gitignore, or license since we already created them locally):

1. `enterprise-rpa-financial-reconciliation`
2. `energy-edw-pipeline-analytics`
3. `agentic-doc-intel-local-llm`
4. `JayNabasu` *(Note: GitHub will highlight this as the special repository that displays on your profile page!)*

---

## Step 2: Push Each Repository from PowerShell

Open PowerShell in this folder and run the push commands:

### Project 1: Enterprise RPA
```powershell
cd "enterprise-rpa-financial-reconciliation"
git remote add origin https://github.com/JayNabasu/enterprise-rpa-financial-reconciliation.git
git branch -M main
git push -u origin main
cd ..
```

### Project 2: Energy EDW & Analytics
```powershell
cd "energy-edw-pipeline-analytics"
git remote add origin https://github.com/JayNabasu/energy-edw-pipeline-analytics.git
git branch -M main
git push -u origin main
cd ..
```

### Project 3: Agentic Local LLM Document Intelligence
```powershell
cd "agentic-doc-intel-local-llm"
git remote add origin https://github.com/JayNabasu/agentic-doc-intel-local-llm.git
git branch -M main
git push -u origin main
cd ..
```

### Project 4: Master GitHub Profile README
```powershell
cd "JayNabasu"
git remote add origin https://github.com/JayNabasu/JayNabasu.git
git branch -M main
git push -u origin main
cd ..
```

---

## What Recruiters Will See
- Your GitHub profile page (`https://github.com/JayNabasu`) will immediately showcase your professional certifications, technical skill matrix, and interactive cards for the 3 flagship projects.
- Your contribution squares will turn green for all committed code.
- Each repository contains complete, functional code, passing unit tests, and enterprise architectural documentation.
