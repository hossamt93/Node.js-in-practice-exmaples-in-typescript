import {Writable} from "stream";

export class CountStream extends Writable {
    count: number;
    matcher: RegExp;

    constructor(matchText: string | RegExp, options?: any){
        super();
        this.count = 0;
        this.matcher = new RegExp(matchText, "ig");
    }
    
    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
        var matches = chunk.toString().match(this.matcher);
        if (matches) {
          this.count += matches.length;
        }
        callback();
    }

    end(cb?: () => void): this;
    end(chunk: any, cb?: () => void): this;
    end(chunk: any, encoding: BufferEncoding, cb?: () => void): this;
    end(chunk?: any, encoding?: any, cb?: any): this {
        this.emit("total", this.count);
        return this;
    }
}
