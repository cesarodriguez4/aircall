import { HTTPService } from "./HTTPService";

export function GetActivities() {
    return HTTPService.get('/activities');
}