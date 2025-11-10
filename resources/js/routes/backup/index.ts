import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BackupController::index
* @see app/Http/Controllers/BackupController.php:13
* @route '/backup'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackupController::index
* @see app/Http/Controllers/BackupController.php:13
* @route '/backup'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackupController::index
* @see app/Http/Controllers/BackupController.php:13
* @route '/backup'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BackupController::index
* @see app/Http/Controllers/BackupController.php:13
* @route '/backup'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BackupController::index
* @see app/Http/Controllers/BackupController.php:13
* @route '/backup'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BackupController::index
* @see app/Http/Controllers/BackupController.php:13
* @route '/backup'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BackupController::index
* @see app/Http/Controllers/BackupController.php:13
* @route '/backup'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\BackupController::run
* @see app/Http/Controllers/BackupController.php:35
* @route '/backup/run'
*/
export const run = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/backup/run',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BackupController::run
* @see app/Http/Controllers/BackupController.php:35
* @route '/backup/run'
*/
run.url = (options?: RouteQueryOptions) => {
    return run.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackupController::run
* @see app/Http/Controllers/BackupController.php:35
* @route '/backup/run'
*/
run.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BackupController::run
* @see app/Http/Controllers/BackupController.php:35
* @route '/backup/run'
*/
const runForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: run.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BackupController::run
* @see app/Http/Controllers/BackupController.php:35
* @route '/backup/run'
*/
runForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: run.url(options),
    method: 'post',
})

run.form = runForm

/**
* @see \App\Http\Controllers\BackupController::download
* @see app/Http/Controllers/BackupController.php:42
* @route '/backup/download/{file}'
*/
export const download = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/backup/download/{file}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BackupController::download
* @see app/Http/Controllers/BackupController.php:42
* @route '/backup/download/{file}'
*/
download.url = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { file: args }
    }

    if (Array.isArray(args)) {
        args = {
            file: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        file: args.file,
    }

    return download.definition.url
            .replace('{file}', parsedArgs.file.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackupController::download
* @see app/Http/Controllers/BackupController.php:42
* @route '/backup/download/{file}'
*/
download.get = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BackupController::download
* @see app/Http/Controllers/BackupController.php:42
* @route '/backup/download/{file}'
*/
download.head = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BackupController::download
* @see app/Http/Controllers/BackupController.php:42
* @route '/backup/download/{file}'
*/
const downloadForm = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BackupController::download
* @see app/Http/Controllers/BackupController.php:42
* @route '/backup/download/{file}'
*/
downloadForm.get = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\BackupController::download
* @see app/Http/Controllers/BackupController.php:42
* @route '/backup/download/{file}'
*/
downloadForm.head = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

/**
* @see \App\Http\Controllers\BackupController::deleteMethod
* @see app/Http/Controllers/BackupController.php:53
* @route '/backup/delete/{file}'
*/
export const deleteMethod = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/backup/delete/{file}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BackupController::deleteMethod
* @see app/Http/Controllers/BackupController.php:53
* @route '/backup/delete/{file}'
*/
deleteMethod.url = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { file: args }
    }

    if (Array.isArray(args)) {
        args = {
            file: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        file: args.file,
    }

    return deleteMethod.definition.url
            .replace('{file}', parsedArgs.file.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BackupController::deleteMethod
* @see app/Http/Controllers/BackupController.php:53
* @route '/backup/delete/{file}'
*/
deleteMethod.delete = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BackupController::deleteMethod
* @see app/Http/Controllers/BackupController.php:53
* @route '/backup/delete/{file}'
*/
const deleteMethodForm = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BackupController::deleteMethod
* @see app/Http/Controllers/BackupController.php:53
* @route '/backup/delete/{file}'
*/
deleteMethodForm.delete = (args: { file: string | number } | [file: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

const backup = {
    index: Object.assign(index, index),
    run: Object.assign(run, run),
    download: Object.assign(download, download),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default backup