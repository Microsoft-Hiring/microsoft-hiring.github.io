# crontab -e
# m h  dom mon dow   command
# */1 * * * * pull.sh
# */1 * * * * sleep 5; pull.sh
# */1 * * * * sleep 10; pull.sh
# crontab -l

#TODO: ensure CD the correct directory
cd microsoft-hiring.github.io 
git pull origin develop | sed "s/^/[$(date)] /" > /tmp/git.log 2>&1