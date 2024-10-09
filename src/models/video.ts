export interface Video {
    id: string; // id starts from v000001
    "title": string;
    "url": string; // S3 bucket url
    "course": string;
    "duration": number; // in seconds
    "thumbnail": string;
}