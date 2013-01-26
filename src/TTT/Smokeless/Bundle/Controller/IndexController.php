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
    function indexAction()
    {
//        return $this->redirect($this->generateUrl('ttt_smokeless__index_login'));
        return array();
    }


    /**
     * @Template
     * @Route("/login")
     */
    function loginAction()
    {
        return array();
    }


    /**
     * @Template
     * @Route("/form")
     */
    function formAction()
    {
        return array();
    }


    /**
     * @Template
     * @Route("/progress")
     */
    function progressAction()
    {
        return array();
    }
}