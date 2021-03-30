# Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
# type: ignore
from pathlib import Path

from setuptools import find_namespace_packages, setup

setup(
    name="hydra-nevergrad-sweeper",
    version="1.1.0rc2",
    author="Jeremy Rapin, Omry Yadan, Jieru Hu",
    author_email="jrapin@fb.com, omry@fb.com, jieru@fb.com",
    description="Hydra Nevergrad Sweeper plugin",
    long_description=(Path(__file__).parent / "README.md").read_text(),
    long_description_content_type="text/markdown",
    url="https://github.com/facebookresearch/hydra/",
    packages=find_namespace_packages(include=["hydra_plugins.*"]),
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Operating System :: OS Independent",
        "Development Status :: 4 - Beta",
    ],
    install_requires=[
        "hydra-core==1.0.*",
        "nevergrad>=0.4.1.post4",
        "numpy<1.20.0",  # remove once nevergrad is upgraded to support numpy 1.20
    ],
    include_package_data=True,
)
