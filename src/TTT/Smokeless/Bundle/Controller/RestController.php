<?php
/**
 * @author Gerard van Helden <drm@melp.nl>
 * @copyright 2013 Gerard van Helden
 *
 * For Licensing information, see the LICENSE file included with this project.
 */

namespace TTT\Smokeless\Bundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


/**
 * @Route("/rest")
 */
class RestController extends BaseController
{
    /**
     * @return \TTT\Smokeless\Bundle\Entity\UserRepository
     */
    protected function getRepository()
    {
        return $this->getDoctrine()->getManager()->getRepository('TTTSmokelessBundle:User');
    }


    /**
     * @Route()
     * @Method({"POST", "PUT"})
     */
    public function postAction()
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser(true);
        $data = json_decode($this->getRequest()->getContent(), true);
        $user->loadData($data);

        $em->persist($user);
        $em->flush();

        return $this->redirect($this->generateUrl('ttt_smokeless__rest_get'));
    }


    /**
     * @Route()
     * @Method("GET")
     */
    public function getAction()
    {
        return new \Symfony\Component\HttpFoundation\JsonResponse($this->getUser()->asData());
    }


    public function getUser($create = false)
    {
        $id = $this->getFacebook()->getUser();

        if (!$id) {
            $id = 1;
//            throw new \Symfony\Component\Security\Core\Exception\AccessDeniedException();
        }

        try {
            $user = $this->getRepository()->findOneByFbUid($id);
        } catch (\Doctrine\ORM\NoResultException $e) {
            if ($create) {
                $user = new \TTT\Smokeless\Bundle\Entity\User();
                $user->setFbUid($id);
            } else {
                throw $e;
            }
        }
        return $user;
    }
}