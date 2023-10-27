import { randomBytes, createHmac } from 'crypto'
import appConfig from '../../config/app.config'

export const random = () => randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string) => {
    // @ts-ignore
    return createHmac('sha256', [salt, password].join('/')).update(appConfig.appKey).digest('hex');
}