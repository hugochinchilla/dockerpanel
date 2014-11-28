This project aims to create a very simple hosting panel.

It's going to be very basic at first, and the key feature is that any dockerfile
or docker image can be used as a one click installer.


## Steps to make it work


### Getting web dependencies:

```
cd web
npm install -g bower
bower install
```

### Getting server dependencies

If you don't know what virtualenv is just use this.

```
cd server
pip install -r requirements.txt
```

If you know virtualenv use this

```
mkvirtualenv dockerpanel
workon dockerpanel
cd server
pip install -r requirements.txt
```


## Contributors

 * Nino René Álvarez (@ninorene)
