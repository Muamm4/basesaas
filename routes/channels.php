<?php

use Illuminate\Support\Facades\Broadcast;


Broadcast::channel('private-whatsapp.{session}', function () {
    return true;
});
