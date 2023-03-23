import { HTTPService } from "./HTTPService";

export function GetActivities() {
    return HTTPService.get('/activities');
}

export function GetCallDetails(id) {
    return HTTPService.get(`/activities/${id}`);
}

export function ArchiveOneCall(id, bool) {
    return HTTPService.patch(`/activities/${id}`, { is_archived: bool });
}

export function ResetActivities() {
    return HTTPService.patch(`/reset`);
}