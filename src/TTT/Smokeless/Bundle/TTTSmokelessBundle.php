<?php

namespace TTT\Smokeless\Bundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class TTTSmokelessBundle extends Bundle
{
    public function boot()
    {
        // trigger Facebook autoloader
        class_exists('Facebook');
    }
}
