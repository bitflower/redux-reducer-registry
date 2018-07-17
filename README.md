# redux-reducer-registry

Dynamic Redux registry tool for lazy loading reducers written in Typescript.

## Why do I need this ?

PWA are slowly taking over the app and website space. Asyncronuous ("lazy") loading components and app parts is beoming more and more popular. With tools like [StencilJS](https://stenciljs.com/) supporting lazy loading out of the box developers will more and more feel the need to organise their code bases in functional modules without having to worry about the build process.

This Redux helper helps with this.

## Usage

See the [demo repo](https://github.com/bitflower/stencil-redux-reducer-registry).

## Credits

The idea and source code was originally written by the DEV team at Twitter, see this post:
[Twitter: Redux modules and code-splitting](http://nicolasgallagher.com/redux-modules-and-code-splitting/)

The post referencing the Twitter solution was written by Dan Abramov on [Stack Overflow](https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application).