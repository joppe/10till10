<?php
/**
 * @author Gerard van Helden <drm@melp.nl>
 * @copyright 2013 Gerard van Helden
 *
 * For Licensing information, see the LICENSE file included with this project.
 */

namespace TTT\Smokeless\Bundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="bigint")
     */
    protected $id;

    /**
     * @ORM\Column(type="string")
     */
    protected $name = '';

    /**
     * @ORM\Column(type="bigint", nullable=true)
     */
    protected $fb_uid = null;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $date_registered = null;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $date_last_fail = null;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $date_smoker_since = null;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    protected $number_per_day = null;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    protected $cost_per_pack = null;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    protected $number_per_pack = null;
}