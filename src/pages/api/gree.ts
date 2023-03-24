import { DeviceInfo, scan } from 'gree-lib';
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse<DeviceInfo[]>) => {
    const devices = await scan("192.168.1.255");
    res.status(200).json(devices);
}

export default handler;