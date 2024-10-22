## Source acuan belajar
youtube : https://www.youtube.com/watch?v=WUAkE3F-dto
source :  https://github.com/yt-liceDev/learn-astro/blob/main/src/layout/MainLayout.astro

# Install Astro

```sh
npm create astro@latest -- --template minimal
```
# Install Tailwind

```sh
npx astro add tailwind
```


# Belajar GIT
1. Setting GIT
```
git config --global user.name "Budi Fikri"
git config --global user.email "it.azkamulia@gmail.com"
```
2. Cek Setting
```
git config --list
```

hasil :
```
user.email=it.azkamulia@gmail.com\
user.name=Budi Fikri
```
3. inisialisai 
```
git init
```
4. cek status
```
git status
```
5. Track semua file
```
git add -A 
```
6. commit file setelah perubahan
```
   git commit -am "pesan" hanya yang berubah
```
7. history setelah commit
```
git log 
```
8. melihat perubahan secara detail
```
git diff
```

9 git remote ke github
```
git remote add origin https://github.com/azkamuliainternational/astro_1.git
```

10 kirim file dari local ke github
```
git push origin master
```

11 tarik file github ke local 
```
git pull origin master
```

# Belajar Astro
1. Navbar menu agar tidak selalu reload
```
---
import { ViewTransitions } from "astro:transitions"
---
<head>
    <ViewTransitions/>
</head>

```

2. Optimation Image
```
---
import { Image } from "astro:assets"
---
<Image src="image.jpg" alt="image" width="100" height="100" loading="/>
```