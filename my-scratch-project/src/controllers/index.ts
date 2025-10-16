{
  "expo": {
    "name": "Empty Box",
    "slug": "empty-box",
    "sdkVersion": "50.0.0",
    "platforms": ["ios", "android"],
    "version": "1.0.0",
    "extra": {
      "contentUrl": "https://example.com"
    }
  }
}
import { Request, Response } from 'express';

export class IndexController {
  public getIndex(req: Request, res: Response): void {
    res.send('Hello, World!');
  }

  public postIndex(req: Request, res: Response): void {
    const data = req.body;
    // Handle the data received in the request
    res.status(201).json(data);
  }
}