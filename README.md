## check Home page component which is revalidating by tag

you have to put only this in fetch props 
```
next: {
     tags: ['name']
}
```

and then you have to make api in api/revalidate/route.ts
make sure the name of api needs to be ravalidate
ther use revalidate Tag to revlaidate those fetch who are using tag
```
import { revalidateTag } from 'next/cache'
revalidateTag(tag)
```
  and get a token to ensure security

  then you need api whose data continuesly changes like i build my own api in another project of next js and running on local server and using it's path localhost:3001 and one thing more that you can not test in local mode you have to build the application and then use start

  ## check basit page which is revalidating by path

  you have nothing to do in api fetching simple fetch api as usuall

then how to make api for path revalidation is 
```
import { revalidatePath } from 'next/cache'
revalidatePath(path)
```

Note:- if you revalidate for tag like calling this:
http://localhost:3000/api/revalidate?tag=name&secret=Basit-Sharif&pageval=tag
then all of your pages data will be updated

but if you call api like this for path 
http://localhost:3000/api/revalidate?secret=Basit-Sharif&pageval=path&path=/basit
then only basit page data will be updated not all pages data

SO i recomend to use paths for revalidate