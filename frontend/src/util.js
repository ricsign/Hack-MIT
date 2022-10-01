import data from './data/personal-analytics.json'

export function getUser(id) {
    return {"today": data["personal-analytics"][0]["emission-reduced"], "week": data["personal-analytics"][1]["emission-reduced"]}
}