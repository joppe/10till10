<?php
/**
 * @author Gerard van Helden <drm@melp.nl>
 * @copyright 2013 Gerard van Helden
 *
 * For Licensing information, see the LICENSE file included with this project.
 */
namespace TTT\Smokeless\Bundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    /**
     * @Template
     * @Route("/")
     */
    function indexAction() {

        var_dump($this->get('fb'));
        die();
        return arraY();
    }
}