import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OrganizationSwitcherController::__invoke
* @see app/Http/Controllers/OrganizationSwitcherController.php:10
* @route '/organization/switch'
*/
const OrganizationSwitcherController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: OrganizationSwitcherController.url(options),
    method: 'post',
})

OrganizationSwitcherController.definition = {
    methods: ["post"],
    url: '/organization/switch',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OrganizationSwitcherController::__invoke
* @see app/Http/Controllers/OrganizationSwitcherController.php:10
* @route '/organization/switch'
*/
OrganizationSwitcherController.url = (options?: RouteQueryOptions) => {
    return OrganizationSwitcherController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationSwitcherController::__invoke
* @see app/Http/Controllers/OrganizationSwitcherController.php:10
* @route '/organization/switch'
*/
OrganizationSwitcherController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: OrganizationSwitcherController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationSwitcherController::__invoke
* @see app/Http/Controllers/OrganizationSwitcherController.php:10
* @route '/organization/switch'
*/
const OrganizationSwitcherControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OrganizationSwitcherController.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationSwitcherController::__invoke
* @see app/Http/Controllers/OrganizationSwitcherController.php:10
* @route '/organization/switch'
*/
OrganizationSwitcherControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OrganizationSwitcherController.url(options),
    method: 'post',
})

OrganizationSwitcherController.form = OrganizationSwitcherControllerForm

export default OrganizationSwitcherController