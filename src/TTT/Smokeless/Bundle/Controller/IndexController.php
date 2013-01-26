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
use \Symfony\Component\HttpFoundation\Response;

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
     * @Route("/channel")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    function channelAction()
    {
        $response = new Response();
        $response
            ->setPublic()
            ->setMaxAge(60*60*24*365)
            ->setExpires(new \DateTime('+1 year'))
            ->setContent('<script src="//connect.facebook.net/en_US/all.js"></script>')
        ;
        return $response;
    }
}