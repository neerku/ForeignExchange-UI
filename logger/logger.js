/* eslint-disable no-console */
export class Logger{
    constructor(component,appInsight,uuid,user){
        this.component = component
        this.appInsight = appInsight
        this.uuid = uuid
        this.user = user || ''

    }

    debug(...msg){
        try{
        const logmesage = `${this.uuid} - 2.2 WEB - ${this.user} [${this.component}] - ${msg.join(' - ')}`
        console.log(logmesage)
        }catch{
            console.error('Loggin Error')
        }
    }

    log(...msg){
        try{
        const logmesage = `${this.uuid} - 2.2 WEB - ${this.user} [${this.component}] - ${msg.join(' - ')}`
        console.log(logmesage)
        this.appInsight.trackTrace({ message: logmesage })
        }
        catch{
            console.error('Loggin Error')
        }
    }

    warn(...msg){
        try{
        const logmesage = `${this.uuid} - 2.2 WEB - ${this.user} [${this.component}] - ${msg.join(' - ')}`
        console.warn(logmesage)
        }
        catch{
            console.error('Loggin Error')
        }
    }

    error(...msg){
        try{
        const logmesage = `${this.uuid} - 2.2 WEB - ${this.user} [${this.component}] - ${msg.join(' - ')}`
        console.error(logmesage)
        this.appInsight.trackTrace({ exception: logmesage })
        this.appInsight.trackException({
            exception: new Error(logmesage),
        })}
        catch{
            console.error('Loggin Error')
        }
    }
}