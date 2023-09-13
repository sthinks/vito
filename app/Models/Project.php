<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Project extends Model
{
    use Translatable;
    protected $translatable = ['project_name', 'client','project_status',"scope","subcontractor"];
}