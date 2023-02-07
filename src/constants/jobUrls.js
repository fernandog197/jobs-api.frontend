import { baseUrl } from './baseUrl'

export const jobsGetAllAndCreate = `${baseUrl}/jobs`

export const jobsGetUpdateDelete = (id) => {
    return `${baseUrl}/jobs/${id}`
}