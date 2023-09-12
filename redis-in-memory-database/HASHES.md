type of values in hashes
---
> create hash

hset [KEY VALUE] [REF NAME VALUE] [VALUE]

hset myhash name David
hset myhash email email@domain.com

---
> return keys in the hash

hkeys [KEY VALUE]

hkeys myhash

---
> return values from the hash

kvals [KEY VALUE]

kvals myhash

---
> return all hashes

hgetall [KEY VALUE]

hgetall myhash

---
> check if a hash exist

hexists [KEY VALUE] [hash name]

hexists myhash name

return 1 exist returns 0 doesn't exist

---
> check the length of the hast

hlen [KEY VALUE]

hlen myhash

---
> set multiple values in the hash

hmset [KEY VALUE] [KEY] [VALUE] [KEY] [VALUE] [KEY] [VALUE]

hmset myhash country India phone 999999

> get multiple hashes

hmget [KEY VALUE] [KEY] [VALUE] [KEY] [VALUE] [KEY] [VALUE]

hmget myhash name email phone

---
> to increment any of the values in the hash

hincrby [KEY VALUE] [field - key]

hincrby myhash age 2

---
> increment with float number

hincrbyfloat [KEY VALUE] [field key] [float number]

hincrbyfloat myhash age 1.5

---
> remove key from the hash

hdel [KEY VALUE] [field key]

hdel myhash age

---
>  GET THE length of the fields

hstrlen [KEY VALUE] [fields VALUE]

hstrlen myhash name

---
> we add in the fields if available

hsetnx [KEY VALUE] [field key] [value]

hsetnx myhash last_name Larios
