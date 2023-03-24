import { DeviceInfo } from "gree-lib";

export const scan = async (): Promise<DeviceInfo[] | undefined> => {
    try {
        const response = await fetch("/api/gree");
        if (response.ok) {
            const deviceInfo: DeviceInfo[] = await response.json();
            return deviceInfo;
        }

        return undefined;
    } catch(err) {
        console.log(err);
    }       
}