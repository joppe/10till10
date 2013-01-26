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
 * @ORM\Entity(repositoryClass="UserRepository")
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
     * @ORM\Column(type="string", nullable=true)
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


    public function __construct()
    {
        $this->setDateRegistered(new \Datetime());
        $this->setDateLastFail(new \Datetime());
    }


    public function setCostPerPack($cost_per_pack)
    {
        $this->cost_per_pack = $cost_per_pack * 100;
    }

    public function getCostPerPack()
    {
        return $this->cost_per_pack / 100;
    }

    public function setDateLastFail($date_last_fail)
    {
        $this->date_last_fail = $date_last_fail;
    }

    public function getDateLastFail($format = null)
    {
        if (null !== $format) {
            return $this->date_last_fail->format($format);
        }
        return $this->date_last_fail;
    }

    public function setDateRegistered($date_registered)
    {
        $this->date_registered = $date_registered;
    }

    public function getDateRegistered($format = null)
    {
        if (null !== $format) {
            return $this->date_registered->format($format);
        }
        return $this->date_registered;
    }

    public function setDateSmokerSince($date_smoker_since)
    {
        $this->date_smoker_since = $date_smoker_since;
    }

    public function getDateSmokerSince($format = null)
    {
        if (null !== $format) {
            return $this->date_smoker_since->format($format);
        }
        return $this->date_smoker_since;
    }

    public function setFbUid($fb_uid)
    {
        $this->fb_uid = $fb_uid;
    }

    public function getFbUid()
    {
        return $this->fb_uid;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setNumberPerDay($number_per_day)
    {
        $this->number_per_day = $number_per_day;
    }

    public function getNumberPerDay()
    {
        return $this->number_per_day;
    }

    public function setNumberPerPack($number_per_pack)
    {
        $this->number_per_pack = $number_per_pack;
    }

    public function getNumberPerPack()
    {
        return $this->number_per_pack;
    }

    public function loadData($data)
    {
        foreach ($data as $key => $value) {
            switch ($key) {
                case 'id':
                case 'fb_uid':
                    // skip
                    break;
                case 'name':
                    $this->setName($value);
                    break;
                case 'date_registered':
                case 'date_last_fail':
                case 'date_smoker_since':
                    $this->{$key} = new \DateTime($value);
                    break;
                case 'number_per_day':
                case 'number_per_pack':
                    $this->{$key} = (int) $value;
                    break;
                case 'cost_per_pack':
                    $this->setCostPerPack((float) $value);
                    break;
                default:
                    throw new \InvalidArgumentException("{$key} is not a valid property");
            }
        }
    }


    public function asData()
    {
        return array(
            'name'              => $this->getName(),
            'date_registered'   => $this->getDateRegistered('Y-m-d H:i:s'),
            'date_last_fail'    => $this->getDateLastFail('Y-m-d H:i:s'),
            'date_smoker_since' => $this->getDateSmokerSince('Y-m-d H:i:s'),
            'number_per_day'    => $this->getNumberPerDay(),
            'number_per_pack'   => $this->getNumberPerPack(),
            'cost_per_pack'     => $this->getCostPerPack()
        );
    }
}