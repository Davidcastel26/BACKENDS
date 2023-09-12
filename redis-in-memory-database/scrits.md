> scripts redis

eval "[scripts]" 1 [KEY NAME] [VALUE NAME]

eval "redis.call('set', KEYS[1], ARGV[1])" 1 name David

eval "redis.call('mset', KEYS[1], ARGV[1], KEYS[2], ARGV[2])" 2 name last_name David Larios