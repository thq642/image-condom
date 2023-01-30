# image-condom

A simple image compression and resizing tool using the [Sharp](https://www.npmjs.com/package/sharp) JavaScript library to perform operations such as compression, resizing, and on-the-fly processing of images.

## Usage

example url:

   `http://localhost:3000/?url=https://raw.githubusercontent.com/riqalter/minima-wall/master/images/Electronic_Sample_96-calm-night.png&w=200&h=200&q=40`

### Parameters

- `?url=` - url of image
- `&w=` - width of image
- `&h=` - height of image 
- `&q=` - quality of image (0-100)

## if you want to use authentication 

1. make `.env` 

2. with content :
```
USER=anything
PASS=securepassword
```

### Deploy

you can deploy this project to:

- [Vercel](https://vercel.com/)
- [Cyclic](https://cyclic.sh/)
