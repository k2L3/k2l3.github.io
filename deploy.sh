# 忽略错误
###
 # @Author: LikSeven
 # @Date: 2023-03-09 11:36:08
 # @LastEditTime: 2023-03-09 14:40:46
 # @LastEditors: LikSeven
 # @Description: 
 # @FilePath: \blog\deploy.sh
 # 下面的代码没有bug!!!
### 
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push https://github.com/k2L3/blog.git show

cd -
