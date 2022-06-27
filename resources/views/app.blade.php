<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>
</head>
<head>
    <link rel="stylesheet" href="{{ asset(('css/reset.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/style.css')) }}">
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
    <script src="{{ asset(mix('js/manifest.js')) }}"></script>
    <script src="{{ asset(mix('js/vendor.js')) }}"></script>
    <script src="{{ asset(mix('js/app.js')) }}"></script>
</body>
</html>
