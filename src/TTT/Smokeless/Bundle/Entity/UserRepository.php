<?php
/**
 * @author Gerard van Helden <drm@melp.nl>
 * @copyright 2013 Gerard van Helden
 *
 * For Licensing information, see the LICENSE file included with this project.
 */

namespace TTT\Smokeless\Bundle\Entity;

use Doctrine\ORM\EntityRepository;

class UserRepository extends EntityRepository
{
    /**
     * @return User
     */
    function findOneByFbUid($id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.fb_uid=:id')
            ->getQuery()
            ->setParameter('id', $id)
            ->getSingleResult()
        ;
    }
}