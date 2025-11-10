import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\SettingAppController::edit
* @see app/Http/Controllers/SettingAppController.php:11
* @route '/settingsapp'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settingsapp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SettingAppController::edit
* @see app/Http/Controllers/SettingAppController.php:11
* @route '/settingsapp'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingAppController::edit
* @see app/Http/Controllers/SettingAppController.php:11
* @route '/settingsapp'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SettingAppController::edit
* @see app/Http/Controllers/SettingAppController.php:11
* @route '/settingsapp'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SettingAppController::edit
* @see app/Http/Controllers/SettingAppController.php:11
* @route '/settingsapp'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SettingAppController::edit
* @see app/Http/Controllers/SettingAppController.php:11
* @route '/settingsapp'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SettingAppController::edit
* @see app/Http/Controllers/SettingAppController.php:11
* @route '/settingsapp'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\SettingAppController::update
* @see app/Http/Controllers/SettingAppController.php:18
* @route '/settingsapp'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/settingsapp',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SettingAppController::update
* @see app/Http/Controllers/SettingAppController.php:18
* @route '/settingsapp'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SettingAppController::update
* @see app/Http/Controllers/SettingAppController.php:18
* @route '/settingsapp'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingAppController::update
* @see app/Http/Controllers/SettingAppController.php:18
* @route '/settingsapp'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SettingAppController::update
* @see app/Http/Controllers/SettingAppController.php:18
* @route '/settingsapp'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

const setting = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default setting