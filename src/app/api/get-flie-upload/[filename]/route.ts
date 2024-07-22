import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

export async function GET(request: Request, { params }: { params: { filename: string } }) {
    const { filename } = params;
    const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

    if (fs.existsSync(filePath)) {
        const fileBuffer = fs.readFileSync(filePath);
        const mimeType: any = mime.lookup(filePath)

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': mimeType,
                'Content-Length': fileBuffer.length.toString(),
                'Content-Disposition': `filename="${filename}"`
            }
        });
    } else {
        return new NextResponse('File not found', { status: 404 });
    }
}
