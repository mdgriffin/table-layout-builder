# table-builder

## TODO

- [ ] Get styles consistent
- [X] More row types
    - [x] Date input row
    - [x] Select input
        - [ ] Make options editable
- [x] ~~HTML Export~~ (handled by introspector)
- [X] Extract common row methods into mixin
- [ ] Cell CSS styling options in context menu
- [ ] Need to keep context options open when selecting sub-menu
    - Currently it closes because the `clickOutside` event is triggered
- [ ] Need a common wrapper around the context actions that call close after the action is performed, but not when its opening a sub-menu

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
