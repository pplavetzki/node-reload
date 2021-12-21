# Simple Reload Example

This is just a simple example that will reload a file (config) when it receives an event from the OS.  If uses the [FS Watch function](https://nodejs.org/docs/latest/api/fs.html#fspromiseswatchfilename-options).

It also is using the NodeJS [config package](https://github.com/lorenwest/node-config) to handle config management.  

Since the reload of the config file is done through the use of the FS module and not through the config module, you can use whichever config module you would like to handle management.


## To Run Example

```
make install run

# Example output:
{ logLevel: 'info', overrides: { logLevel: 'debug', user: 'jason' } }

# Edit the config/default.json file -- change config.overrides.user to another value
{ logLevel: 'info', overrides: { logLevel: 'debug', user: 'Dharma' } }

```