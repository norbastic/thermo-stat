import { DeviceInfo } from "gree-lib";

export const scan = async (): Promise<DeviceInfo[] | undefined> => {
    try {
        const response = await fetch("/api/gree");
        if (response.status !== 200 || !response.body) {
            return undefined;
        }

        return undefined;
    } catch(err) {
        console.log(err);
    }       
}