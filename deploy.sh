# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'
git checkout -b show
git push -f https://github.com/k2L3/blog.git show

cd -
