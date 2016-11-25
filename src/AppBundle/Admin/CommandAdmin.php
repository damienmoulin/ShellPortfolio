<?php

/**
 * Created by PhpStorm.
 * User: damien
 * Date: 25/11/16
 * Time: 13:05
 */

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class CommandAdmin extends Admin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('command', 'text')
            ->add('type', 'number')
            ->add('response', 'textarea');
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('command')
            ->add('type');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('command');
    }
}