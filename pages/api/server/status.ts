import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerStatus } from '../../../lib/minecraft';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const ip = process.env.MINECRAFT_SERVER_IP || 'mc.yourserver.com';
  const port = parseInt(process.env.MINECRAFT_SERVER_PORT || '25565');
  const status = await getServerStatus(ip, port);
  res.status(200).json(status);
}
