
<fieldset>
<h5>Git global setup</h5>
<pre class="bg-light">git config --global user.name "Wani Piro"
git config --global user.email "wani.piro@merahciptamedia.co.id"
</pre>
</fieldset>
<fieldset>
<h5>Create a new repository</h5>
<pre class="bg-light">git clone <span class="js-clone">https://gitlab.com/itopialabs/web-sac-revamp-2021.git</span>
cd web-sac-revamp-2021
git switch -c main
touch README.md
git add README.md
git commit -m "add README"
<span>git push -u origin main</span></pre>
</fieldset>
<fieldset>
<h5>Push an existing folder</h5>
<pre class="bg-light">cd existing_folder
git init --initial-branch=main
git remote add origin <span class="js-clone">https://gitlab.com/itopialabs/web-sac-revamp-2021.git</span>
git add .
git commit -m "Initial commit"
<span>git push -u origin main</span></pre>
</fieldset>
<fieldset>
<h5>Push an existing Git repository</h5>
<pre class="bg-light">cd existing_repo
git remote rename origin old-origin
git remote add origin <span class="js-clone">https://gitlab.com/itopialabs/web-sac-revamp-2021.git</span>
<span>git push -u origin --all
git push -u origin --tags</span></pre>
</fieldset>
