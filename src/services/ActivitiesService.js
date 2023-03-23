import { HTTPService } from "./HTTPService";

export function GetActivities() {
    return HTTPService.get('/activities');
}

export function GetCallDetails(id) {
    return HTTPService.get(`/activities/${id}`);
}