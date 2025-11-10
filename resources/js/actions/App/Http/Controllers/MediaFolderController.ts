import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MediaFolderController::index
* @see app/Http/Controllers/MediaFolderController.php:14
* @route '/media'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaFolderController::index
* @see app/Http/Controllers/MediaFolderController.php:14
* @route '/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaFolderController::index
* @see app/Http/Controllers/MediaFolderController.php:14
* @route '/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::index
* @see app/Http/Controllers/MediaFolderController.php:14
* @route '/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MediaFolderController::index
* @see app/Http/Controllers/MediaFolderController.php:14
* @route '/media'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::index
* @see app/Http/Controllers/MediaFolderController.php:14
* @route '/media'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::index
* @see app/Http/Controllers/MediaFolderController.php:14
* @route '/media'
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
* @see \App\Http\Controllers\MediaFolderController::create
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/media/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaFolderController::create
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaFolderController::create
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::create
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MediaFolderController::create
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::create
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::create
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\MediaFolderController::store
* @see app/Http/Controllers/MediaFolderController.php:56
* @route '/media'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MediaFolderController::store
* @see app/Http/Controllers/MediaFolderController.php:56
* @route '/media'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaFolderController::store
* @see app/Http/Controllers/MediaFolderController.php:56
* @route '/media'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaFolderController::store
* @see app/Http/Controllers/MediaFolderController.php:56
* @route '/media'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaFolderController::store
* @see app/Http/Controllers/MediaFolderController.php:56
* @route '/media'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MediaFolderController::show
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
export const show = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaFolderController::show
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
show.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return show.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaFolderController::show
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
show.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::show
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
show.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MediaFolderController::show
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
const showForm = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::show
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
showForm.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::show
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
showForm.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\MediaFolderController::edit
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}/edit'
*/
export const edit = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/media/{medium}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MediaFolderController::edit
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}/edit'
*/
edit.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return edit.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaFolderController::edit
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}/edit'
*/
edit.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::edit
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}/edit'
*/
edit.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MediaFolderController::edit
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}/edit'
*/
const editForm = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::edit
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}/edit'
*/
editForm.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MediaFolderController::edit
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}/edit'
*/
editForm.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\MediaFolderController::update
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
export const update = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MediaFolderController::update
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
update.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return update.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaFolderController::update
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
update.put = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MediaFolderController::update
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
update.patch = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MediaFolderController::update
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
const updateForm = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaFolderController::update
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
updateForm.put = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaFolderController::update
* @see app/Http/Controllers/MediaFolderController.php:0
* @route '/media/{medium}'
*/
updateForm.patch = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\MediaFolderController::destroy
* @see app/Http/Controllers/MediaFolderController.php:71
* @route '/media/{medium}'
*/
export const destroy = (args: { medium: number | { id: number } } | [medium: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MediaFolderController::destroy
* @see app/Http/Controllers/MediaFolderController.php:71
* @route '/media/{medium}'
*/
destroy.url = (args: { medium: number | { id: number } } | [medium: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { medium: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: typeof args.medium === 'object'
        ? args.medium.id
        : args.medium,
    }

    return destroy.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MediaFolderController::destroy
* @see app/Http/Controllers/MediaFolderController.php:71
* @route '/media/{medium}'
*/
destroy.delete = (args: { medium: number | { id: number } } | [medium: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MediaFolderController::destroy
* @see app/Http/Controllers/MediaFolderController.php:71
* @route '/media/{medium}'
*/
const destroyForm = (args: { medium: number | { id: number } } | [medium: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MediaFolderController::destroy
* @see app/Http/Controllers/MediaFolderController.php:71
* @route '/media/{medium}'
*/
destroyForm.delete = (args: { medium: number | { id: number } } | [medium: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const MediaFolderController = { index, create, store, show, edit, update, destroy }

export default MediaFolderController